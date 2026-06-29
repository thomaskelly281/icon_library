import { mdiFeatureSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FeatureSearch(props: IconComponentProps) {
  return <Icon path={mdiFeatureSearch} {...props} />;
}

export { mdiFeatureSearch as path };
