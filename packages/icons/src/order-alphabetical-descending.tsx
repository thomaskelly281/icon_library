import { mdiOrderAlphabeticalDescending } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OrderAlphabeticalDescending(props: IconComponentProps) {
  return <Icon path={mdiOrderAlphabeticalDescending} {...props} />;
}

export { mdiOrderAlphabeticalDescending as path };
