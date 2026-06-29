import { mdiWechat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wechat(props: IconComponentProps) {
  return <Icon path={mdiWechat} {...props} />;
}

export { mdiWechat as path };
