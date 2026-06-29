import { mdiSkiCrossCountry } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkiCrossCountry(props: IconComponentProps) {
  return <Icon path={mdiSkiCrossCountry} {...props} />;
}

export { mdiSkiCrossCountry as path };
