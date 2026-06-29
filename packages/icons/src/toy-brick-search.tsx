import { mdiToyBrickSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToyBrickSearch(props: IconComponentProps) {
  return <Icon path={mdiToyBrickSearch} {...props} />;
}

export { mdiToyBrickSearch as path };
