import { mdiImageSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageSearch(props: IconComponentProps) {
  return <Icon path={mdiImageSearch} {...props} />;
}

export { mdiImageSearch as path };
