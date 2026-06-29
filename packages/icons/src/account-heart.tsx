import { mdiAccountHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountHeart(props: IconComponentProps) {
  return <Icon path={mdiAccountHeart} {...props} />;
}

export { mdiAccountHeart as path };
