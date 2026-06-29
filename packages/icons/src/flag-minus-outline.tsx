import { mdiFlagMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlagMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiFlagMinusOutline} {...props} />;
}

export { mdiFlagMinusOutline as path };
