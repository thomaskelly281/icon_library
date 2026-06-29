import { mdiCassette } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cassette(props: IconComponentProps) {
  return <Icon path={mdiCassette} {...props} />;
}

export { mdiCassette as path };
