import { mdiBedSingleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedSingleOutline(props: IconComponentProps) {
  return <Icon path={mdiBedSingleOutline} {...props} />;
}

export { mdiBedSingleOutline as path };
