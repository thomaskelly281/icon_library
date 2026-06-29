import { mdiZodiacVirgo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacVirgo(props: IconComponentProps) {
  return <Icon path={mdiZodiacVirgo} {...props} />;
}

export { mdiZodiacVirgo as path };
