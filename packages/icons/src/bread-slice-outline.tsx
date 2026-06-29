import { mdiBreadSliceOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BreadSliceOutline(props: IconComponentProps) {
  return <Icon path={mdiBreadSliceOutline} {...props} />;
}

export { mdiBreadSliceOutline as path };
