import { mdiHomeSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeSearch(props: IconComponentProps) {
  return <Icon path={mdiHomeSearch} {...props} />;
}

export { mdiHomeSearch as path };
