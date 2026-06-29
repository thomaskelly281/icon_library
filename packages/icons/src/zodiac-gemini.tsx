import { mdiZodiacGemini } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ZodiacGemini(props: IconComponentProps) {
  return <Icon path={mdiZodiacGemini} {...props} />;
}

export { mdiZodiacGemini as path };
