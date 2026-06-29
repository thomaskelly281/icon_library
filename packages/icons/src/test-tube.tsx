import { mdiTestTube } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TestTube(props: IconComponentProps) {
  return <Icon path={mdiTestTube} {...props} />;
}

export { mdiTestTube as path };
