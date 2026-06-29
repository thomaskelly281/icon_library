import { mdiHandCoinOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HandCoinOutline(props: IconComponentProps) {
  return <Icon path={mdiHandCoinOutline} {...props} />;
}

export { mdiHandCoinOutline as path };
