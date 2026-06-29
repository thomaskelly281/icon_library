import { mdiStarHalfFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarHalfFull(props: IconComponentProps) {
  return <Icon path={mdiStarHalfFull} {...props} />;
}

export { mdiStarHalfFull as path };
