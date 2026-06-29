import { mdiStarHalf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarHalf(props: IconComponentProps) {
  return <Icon path={mdiStarHalf} {...props} />;
}

export { mdiStarHalf as path };
