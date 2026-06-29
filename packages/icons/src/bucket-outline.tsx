import { mdiBucketOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BucketOutline(props: IconComponentProps) {
  return <Icon path={mdiBucketOutline} {...props} />;
}

export { mdiBucketOutline as path };
