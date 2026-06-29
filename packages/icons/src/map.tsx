import { mdiMap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Map(props: IconComponentProps) {
  return <Icon path={mdiMap} {...props} />;
}

export { mdiMap as path };
