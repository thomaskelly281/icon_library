import { mdiEarthArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EarthArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiEarthArrowLeft} {...props} />;
}

export { mdiEarthArrowLeft as path };
