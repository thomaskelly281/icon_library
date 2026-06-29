import { mdiTrophy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Trophy(props: IconComponentProps) {
  return <Icon path={mdiTrophy} {...props} />;
}

export { mdiTrophy as path };
