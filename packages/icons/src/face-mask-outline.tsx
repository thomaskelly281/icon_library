import { mdiFaceMaskOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FaceMaskOutline(props: IconComponentProps) {
  return <Icon path={mdiFaceMaskOutline} {...props} />;
}

export { mdiFaceMaskOutline as path };
