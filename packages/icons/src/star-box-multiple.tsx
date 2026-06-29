import { mdiStarBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiStarBoxMultiple} {...props} />;
}

export { mdiStarBoxMultiple as path };
