import { mdiTestTubeEmpty } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TestTubeEmpty(props: IconComponentProps) {
  return <Icon path={mdiTestTubeEmpty} {...props} />;
}

export { mdiTestTubeEmpty as path };
