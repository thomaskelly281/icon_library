import { mdiOrderAlphabeticalAscending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OrderAlphabeticalAscending(props: IconComponentProps) {
  return <Icon path={mdiOrderAlphabeticalAscending} {...props} />;
}

export { mdiOrderAlphabeticalAscending as path };
