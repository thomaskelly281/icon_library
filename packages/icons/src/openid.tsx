import { mdiOpenid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Openid(props: IconComponentProps) {
  return <Icon path={mdiOpenid} {...props} />;
}

export { mdiOpenid as path };
