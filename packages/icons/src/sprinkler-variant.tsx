import { mdiSprinklerVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SprinklerVariant(props: IconComponentProps) {
  return <Icon path={mdiSprinklerVariant} {...props} />;
}

export { mdiSprinklerVariant as path };
