import { mdiLandslide } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Landslide(props: IconComponentProps) {
  return <Icon path={mdiLandslide} {...props} />;
}

export { mdiLandslide as path };
