import { mdiBowlMix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BowlMix(props: IconComponentProps) {
  return <Icon path={mdiBowlMix} {...props} />;
}

export { mdiBowlMix as path };
