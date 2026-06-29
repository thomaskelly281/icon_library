import { mdiAccountMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountMinusOutline} {...props} />;
}

export { mdiAccountMinusOutline as path };
