import { mdiBugCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiBugCheckOutline} {...props} />;
}

export { mdiBugCheckOutline as path };
