import { mdiCollage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Collage(props: IconComponentProps) {
  return <Icon path={mdiCollage} {...props} />;
}

export { mdiCollage as path };
