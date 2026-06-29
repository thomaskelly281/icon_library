import { mdiZodiacCancer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacCancer(props: IconComponentProps) {
  return <Icon path={mdiZodiacCancer} {...props} />;
}

export { mdiZodiacCancer as path };
