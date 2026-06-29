import { mdiFeatureSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FeatureSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiFeatureSearchOutline} {...props} />;
}

export { mdiFeatureSearchOutline as path };
