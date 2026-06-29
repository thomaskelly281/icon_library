import { mdiImageBroken } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageBroken(props: IconComponentProps) {
  return <Icon path={mdiImageBroken} {...props} />;
}

export { mdiImageBroken as path };
