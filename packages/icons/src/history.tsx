import { mdiHistory } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function History(props: IconComponentProps) {
  return <Icon path={mdiHistory} {...props} />;
}

export { mdiHistory as path };
