import { mdiCloudSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloudSearch(props: IconComponentProps) {
  return <Icon path={mdiCloudSearch} {...props} />;
}

export { mdiCloudSearch as path };
