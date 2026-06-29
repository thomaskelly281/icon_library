import { mdiBottleWine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BottleWine(props: IconComponentProps) {
  return <Icon path={mdiBottleWine} {...props} />;
}

export { mdiBottleWine as path };
