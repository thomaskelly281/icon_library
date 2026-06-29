import { mdiAllInclusive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AllInclusive(props: IconComponentProps) {
  return <Icon path={mdiAllInclusive} {...props} />;
}

export { mdiAllInclusive as path };
