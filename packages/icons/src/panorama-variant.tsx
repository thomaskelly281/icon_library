import { mdiPanoramaVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaVariant(props: IconComponentProps) {
  return <Icon path={mdiPanoramaVariant} {...props} />;
}

export { mdiPanoramaVariant as path };
