import { mdiHandCoin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandCoin(props: IconComponentProps) {
  return <Icon path={mdiHandCoin} {...props} />;
}

export { mdiHandCoin as path };
