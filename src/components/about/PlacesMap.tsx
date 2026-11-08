import { geoEquirectangular, geoGraticule10, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import land110 from "world-atlas/land-110m.json";
import { places } from "@/content/site";
import PlacesPins from "./PlacesPins";

// Drawn once at build time: a pencil-traced world on graph paper. Only the pins run in the browser.
const W = 1000;
const H = Math.round((1000 * (58 - -42)) / (160 - -130)); // keeps degrees square

const topo = land110 as unknown as Topology<{ land: GeometryCollection }>;
const land = feature(topo, topo.objects.land);

// Crop to the part of the world these places are in: North America to Sydney.
const LON = [-130, 160];
const LAT = [-42, 58];
const projection = geoEquirectangular()
  .scale(W / (((LON[1] - LON[0]) * Math.PI) / 180))
  .center([(LON[0] + LON[1]) / 2, (LAT[0] + LAT[1]) / 2])
  .translate([W / 2, H / 2]);
const path = geoPath(projection).digits(1);
const landD = path(land) ?? "";
const gridD = path(geoGraticule10()) ?? "";

const pins = places.map((p) => {
  const [px, py] = projection([p.lon, p.lat])!;
  return { ...p, left: (px / W) * 100, top: (py / H) * 100 };
});

export default function PlacesMap() {
  return (
    <PlacesPins pins={pins}>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" aria-hidden="true">
        <defs>
          <clipPath id="map-crop">
            <rect width={W} height={H} />
          </clipPath>
        </defs>
        <g clipPath="url(#map-crop)">
          <path d={gridD} fill="none" stroke="var(--graphite)" strokeOpacity={0.12} strokeWidth={1} vectorEffect="non-scaling-stroke" />
          <path d={landD} fill="#e3ead7" stroke="var(--graphite)" strokeOpacity={0.7} strokeWidth={1} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </g>
      </svg>
    </PlacesPins>
  );
}
