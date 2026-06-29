import { mdiZodiacCapricorn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacCapricorn(props: IconComponentProps) {
  return <Icon path={mdiZodiacCapricorn} {...props} />;
}

export { mdiZodiacCapricorn as path };
