import { mdiHeartSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartSearch(props: IconComponentProps) {
  return <Icon path={mdiHeartSearch} {...props} />;
}

export { mdiHeartSearch as path };
