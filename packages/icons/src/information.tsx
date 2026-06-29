import { mdiInformation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Information(props: IconComponentProps) {
  return <Icon path={mdiInformation} {...props} />;
}

export { mdiInformation as path };
