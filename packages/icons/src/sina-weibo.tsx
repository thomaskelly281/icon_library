import { mdiSinaWeibo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SinaWeibo(props: IconComponentProps) {
  return <Icon path={mdiSinaWeibo} {...props} />;
}

export { mdiSinaWeibo as path };
