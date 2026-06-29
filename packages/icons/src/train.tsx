import { mdiTrain } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Train(props: IconComponentProps) {
  return <Icon path={mdiTrain} {...props} />;
}

export { mdiTrain as path };
