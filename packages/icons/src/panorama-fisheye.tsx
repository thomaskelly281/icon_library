import { mdiPanoramaFisheye } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PanoramaFisheye(props: IconComponentProps) {
  return <Icon path={mdiPanoramaFisheye} {...props} />;
}

export { mdiPanoramaFisheye as path };
