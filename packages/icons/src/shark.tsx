import { mdiShark } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shark(props: IconComponentProps) {
  return <Icon path={mdiShark} {...props} />;
}

export { mdiShark as path };
