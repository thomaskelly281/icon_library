import { mdiZodiacPisces } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacPisces(props: IconComponentProps) {
  return <Icon path={mdiZodiacPisces} {...props} />;
}

export { mdiZodiacPisces as path };
