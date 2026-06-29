import { mdiCached } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cached(props: IconComponentProps) {
  return <Icon path={mdiCached} {...props} />;
}

export { mdiCached as path };
