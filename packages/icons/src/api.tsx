import { mdiApi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Api(props: IconComponentProps) {
  return <Icon path={mdiApi} {...props} />;
}

export { mdiApi as path };
